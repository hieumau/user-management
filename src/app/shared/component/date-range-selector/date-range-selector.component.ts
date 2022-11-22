import {
  Component,
  Injectable,
  Output,
  EventEmitter,
  Directive,
  Inject,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import {
  MatDateRangeSelectionStrategy,
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';
import * as _moment from 'moment';
import { Moment } from 'moment';
const moment = _moment;

const defaultRange = 6;
const defaultFirstDayOfWeek = 0;



@Injectable()
export class MaxRangeSelectionStrategy<D>
  implements MatDateRangeSelectionStrategy<D>
{
  start: any;
  public delta: number = defaultRange + 1;
  constructor(private _dateAdapter: DateAdapter<D>) {}

  selectionFinished(date: D, currentRange: DateRange<D>, event: Event | null) {
    if (event === null) {
      const start = date;
      const end = this._dateAdapter.addCalendarDays(start, this.delta);
      return new DateRange<D>(start, end);
    }
    let { start, end } = currentRange;
    if (start == null || (start && end)) {
      start = date;
      end = null;
    } else if (end == null) {
      const maxDate = this._dateAdapter.addCalendarDays(start, this.delta);
      end = date ? (date > maxDate ? maxDate : date) : null;
    }
    if (start && end && start > end) {
      let tmp = start;
      start = end;
      end = tmp;
    }
    return new DateRange<D>(start, end);
  }

  createPreview(
    activeDate: D | null,
    currentRange: DateRange<D>
  ): DateRange<D> {
    if (currentRange.start && !currentRange.end) {
      const maxDate = this._dateAdapter.addCalendarDays(
        currentRange.start,
        this.delta
      );
      const rangeEnd = activeDate
        ? activeDate > maxDate
          ? maxDate
          : activeDate
        : null;

      return new DateRange(currentRange.start, rangeEnd);
    }

    return new DateRange<D>(null, null);
  }
}

@Directive({
  selector: '[maxRange]',
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: MaxRangeSelectionStrategy,
    },
  ],
})
export class MaxRangeDirective {
  constructor(
    @Inject(MAT_DATE_RANGE_SELECTION_STRATEGY)
    private maxRangeStrategy: MaxRangeSelectionStrategy<any>
  ) {}
  @Input() set maxRange(value: number) {
    this.maxRangeStrategy.delta = +value || defaultRange;
  }
}

@Component({
  template: '',
})
abstract class AbstractDateRangeSelectorComponent implements OnInit {
  @Output() onDateRangeChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() firstDayOfWeek: number = defaultFirstDayOfWeek;
  @Input() showIconOnly: boolean = false;
  @Input() buttonLabel: string = '';
  @Input() buttonTooltip: string = '';
  @Input() buttonIcon: string = 'date_range';
  @Input() buttonStyle: string = 'background-color: transparent; color: white';
  @Input() default: any = {
    dates: {
      start: null,
      end: null
    }
  }
  dateRangeFormGroup: FormGroup = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  selectedDates: any = {};

  constructor() {}

  abstract getRange(): DateRange<Moment>;

  ngOnInit() {
    let dateRange: DateRange<Moment> = this.getRange();
    let startDate
    let endDate
    if (this.default.dates.start != null && this.default.dates.end !=null) {
      startDate = moment(
        this.default.dates.start
      );
      endDate = moment(
        this.default.dates.end
      );
    } else {
      startDate = moment(
        dateRange.start !== null ? dateRange.start : moment()
      );
      endDate = moment(
        dateRange.end !== null ? dateRange.end : startDate.add(0, 'days')
      );
    }


    this.dateRangeFormGroup
      .get('start')
      ?.setValue(startDate);
    this.dateRangeFormGroup
      .get('end')
      ?.setValue(endDate);
    this.setSelectedDates(startDate, endDate);
    this.notifyParent('init');

  }

  setSelectedDates(start: Moment, end: Moment) {
    this.selectedDates['start'] = moment(start);
    this.selectedDates['end'] = moment(end);
  }

  onDateChangeEvent(target: string, event: MatDatepickerInputEvent<Moment>) {
    this.selectedDates[target] = moment(event.value);
    if (target === 'end' && event.value) {
      this.notifyParent('change');
    }
    console.log('After change')
    console.log(this.dateRangeFormGroup)
  }

  notifyParent(eventType: string) {
    this.onDateRangeChange.emit({ dates: this.selectedDates, type: eventType });
  }
}

/** @title Date range picker with custom a selection strategy */
@Component({
  selector: 'app-max-date-range-selector',
  templateUrl: './date-range-selector.component.html',
  styleUrls: ['./date-range-selector.component.scss'],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: MaxRangeSelectionStrategy,
    },
  ],
})
export class MaxDateRangeSelectorComponent extends AbstractDateRangeSelectorComponent {
  constructor(
    private maxRangeSelectionStrategy: MaxRangeSelectionStrategy<Moment>
  ) {
    super();
  }

  getRange(): DateRange<Moment> {
    const start = moment();
    const end = moment().add(this.maxRangeSelectionStrategy.delta, 'days');
    this.dateRangeFormGroup
      .get('start')
      ?.setValue({ value: start, disabled: true });
    this.dateRangeFormGroup
      .get('end')
      ?.setValue({ value: end, disabled: true });
    const dateRange = this.maxRangeSelectionStrategy.selectionFinished(
      moment(),
      new DateRange<Moment>(start, end),
      null
    );
    return dateRange;
  }
}

