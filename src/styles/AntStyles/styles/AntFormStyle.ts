import { createGlobalStyle } from 'styled-components';

const AntFormStyle = createGlobalStyle`
.ant-form-item .ant-upload {
  background: transparent;
}
.ant-form-item .ant-upload.ant-upload-drag {
  background: #fafafa;
}
.ant-form-item input[type='radio'],
.ant-form-item input[type='checkbox'] {
  width: 14px;
  height: 14px;
}
.ant-form-item .ant-radio-inline,
.ant-form-item .ant-checkbox-inline {
  display: inline-block;
  margin-left: 8px;
  font-weight: normal;
  vertical-align: middle;
  cursor: pointer;
}
.ant-form-item .ant-radio-inline:first-child,
.ant-form-item .ant-checkbox-inline:first-child {
  margin-left: 0;
}
.ant-form-item .ant-checkbox-vertical,
.ant-form-item .ant-radio-vertical {
  display: block;
}
.ant-form-item .ant-checkbox-vertical + .ant-checkbox-vertical,
.ant-form-item .ant-radio-vertical + .ant-radio-vertical {
  margin-left: 0;
}
.ant-form-item .ant-input-number + .ant-form-text {
  margin-left: 8px;
}
.ant-form-item .ant-input-number-handler-wrap {
  z-index: 2;
}
.ant-form-item .ant-select,
.ant-form-item .ant-cascader-picker {
  width: 100%;
}
.ant-form-item .ant-picker-calendar-year-select,
.ant-form-item .ant-picker-calendar-month-select,
.ant-form-item .ant-input-group .ant-select,
.ant-form-item .ant-input-group .ant-cascader-picker,
.ant-form-item .ant-input-number-group .ant-select,
.ant-form-item .ant-input-number-group .ant-cascader-picker {
  width: auto;
}
.ant-form-inline {
  display: flex;
  flex-wrap: wrap;
}
.ant-form-inline .ant-form-item {
  flex: none;
  flex-wrap: nowrap;
  margin-right: 16px;
  margin-bottom: 0;
}
.ant-form-inline .ant-form-item-with-help {
  margin-bottom: 24px;
}
.ant-form-inline .ant-form-item > .ant-form-item-label,
.ant-form-inline .ant-form-item > .ant-form-item-control {
  display: inline-block;
  vertical-align: top;
}
.ant-form-inline .ant-form-item > .ant-form-item-label {
  flex: none;
}
.ant-form-inline .ant-form-item .ant-form-text {
  display: inline-block;
}
.ant-form-inline .ant-form-item .ant-form-item-has-feedback {
  display: inline-block;
}
.ant-form-horizontal .ant-form-item-label {
  flex-grow: 0;
}
.ant-form-horizontal .ant-form-item-control {
  flex: 1 1 0;
}
.ant-form-horizontal .ant-form-item-control:not(.ant-col) {
  min-width: 0;
}
.ant-form-vertical .ant-form-item {
  flex-direction: column;
}
.ant-form-vertical .ant-form-item-label > label {
  height: auto;
}
.ant-form-vertical .ant-form-item-label,
.ant-col-24.ant-form-item-label,
.ant-col-xl-24.ant-form-item-label {
  padding: 0 0 8px;
  line-height: 1.5715;
  white-space: initial;
  text-align: left;
}
.ant-form-vertical .ant-form-item-label > label,
.ant-col-24.ant-form-item-label > label,
.ant-col-xl-24.ant-form-item-label > label {
  margin: 0;
}
.ant-form-vertical .ant-form-item-label > label::after,
.ant-col-24.ant-form-item-label > label::after,
.ant-col-xl-24.ant-form-item-label > label::after {
  display: none;
}
.ant-form-rtl.ant-form-vertical .ant-form-item-label,
.ant-form-rtl.ant-col-24.ant-form-item-label,
.ant-form-rtl.ant-col-xl-24.ant-form-item-label {
  text-align: right;
}
@media (max-width: 575px) {
  .ant-form-item .ant-form-item-label {
    padding: 0 0 8px;
    line-height: 1.5715;
    white-space: initial;
    text-align: left;
  }
  .ant-form-item .ant-form-item-label > label {
    margin: 0;
  }
  .ant-form-item .ant-form-item-label > label::after {
    display: none;
  }
  .ant-form-rtl.ant-form-item .ant-form-item-label {
    text-align: right;
  }
  .ant-form .ant-form-item {
    flex-wrap: wrap;
  }
  .ant-form .ant-form-item .ant-form-item-label,
  .ant-form .ant-form-item .ant-form-item-control {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .ant-col-xs-24.ant-form-item-label {
    padding: 0 0 8px;
    line-height: 1.5715;
    white-space: initial;
    text-align: left;
  }
  .ant-col-xs-24.ant-form-item-label > label {
    margin: 0;
  }
  .ant-col-xs-24.ant-form-item-label > label::after {
    display: none;
  }
  .ant-form-rtl.ant-col-xs-24.ant-form-item-label {
    text-align: right;
  }
}
@media (max-width: 767px) {
  .ant-col-sm-24.ant-form-item-label {
    padding: 0 0 8px;
    line-height: 1.5715;
    white-space: initial;
    text-align: left;
  }
  .ant-col-sm-24.ant-form-item-label > label {
    margin: 0;
  }
  .ant-col-sm-24.ant-form-item-label > label::after {
    display: none;
  }
  .ant-form-rtl.ant-col-sm-24.ant-form-item-label {
    text-align: right;
  }
}
@media (max-width: 991px) {
  .ant-col-md-24.ant-form-item-label {
    padding: 0 0 8px;
    line-height: 1.5715;
    white-space: initial;
    text-align: left;
  }
  .ant-col-md-24.ant-form-item-label > label {
    margin: 0;
  }
  .ant-col-md-24.ant-form-item-label > label::after {
    display: none;
  }
  .ant-form-rtl.ant-col-md-24.ant-form-item-label {
    text-align: right;
  }
}
@media (max-width: 1199px) {
  .ant-col-lg-24.ant-form-item-label {
    padding: 0 0 8px;
    line-height: 1.5715;
    white-space: initial;
    text-align: left;
  }
  .ant-col-lg-24.ant-form-item-label > label {
    margin: 0;
  }
  .ant-col-lg-24.ant-form-item-label > label::after {
    display: none;
  }
  .ant-form-rtl.ant-col-lg-24.ant-form-item-label {
    text-align: right;
  }
}
@media (max-width: 1599px) {
  .ant-col-xl-24.ant-form-item-label {
    padding: 0 0 8px;
    line-height: 1.5715;
    white-space: initial;
    text-align: left;
  }
  .ant-col-xl-24.ant-form-item-label > label {
    margin: 0;
  }
  .ant-col-xl-24.ant-form-item-label > label::after {
    display: none;
  }
  .ant-form-rtl.ant-col-xl-24.ant-form-item-label {
    text-align: right;
  }
}
.ant-form-item {
  /* Some non-status related component style is in components.less */
  /* To support leave along ErrorList. We add additional className to handle explain style */
}
.ant-form-item-explain-error {
  color: #ff4d4f;
}
.ant-form-item-explain-warning {
  color: #faad14;
}
.ant-form-item-has-feedback .ant-input {
  padding-right: 24px;
}
.ant-form-item-has-feedback .ant-input-affix-wrapper .ant-input-suffix {
  padding-right: 18px;
}
.ant-form-item-has-feedback .ant-input-search:not(.ant-input-search-enter-button) .ant-input-suffix {
  right: 28px;
}
.ant-form-item-has-feedback .ant-switch {
  margin: 2px 0 4px;
}
.ant-form-item-has-feedback > .ant-select .ant-select-arrow,
.ant-form-item-has-feedback > .ant-select .ant-select-clear,
.ant-form-item-has-feedback :not(.ant-input-group-addon) > .ant-select .ant-select-arrow,
.ant-form-item-has-feedback :not(.ant-input-group-addon) > .ant-select .ant-select-clear,
.ant-form-item-has-feedback :not(.ant-input-number-group-addon) > .ant-select .ant-select-arrow,
.ant-form-item-has-feedback :not(.ant-input-number-group-addon) > .ant-select .ant-select-clear {
  right: 32px;
}
.ant-form-item-has-feedback > .ant-select .ant-select-selection-selected-value,
.ant-form-item-has-feedback :not(.ant-input-group-addon) > .ant-select .ant-select-selection-selected-value,
.ant-form-item-has-feedback :not(.ant-input-number-group-addon) > .ant-select .ant-select-selection-selected-value {
  padding-right: 42px;
}
.ant-form-item-has-feedback .ant-cascader-picker-arrow {
  margin-right: 19px;
}
.ant-form-item-has-feedback .ant-cascader-picker-clear {
  right: 32px;
}
.ant-form-item-has-feedback .ant-picker {
  padding-right: 29.2px;
}
.ant-form-item-has-feedback .ant-picker-large {
  padding-right: 29.2px;
}
.ant-form-item-has-feedback .ant-picker-small {
  padding-right: 25.2px;
}
.ant-form-item-has-feedback.ant-form-item-has-success .ant-form-item-children-icon,
.ant-form-item-has-feedback.ant-form-item-has-warning .ant-form-item-children-icon,
.ant-form-item-has-feedback.ant-form-item-has-error .ant-form-item-children-icon,
.ant-form-item-has-feedback.ant-form-item-is-validating .ant-form-item-children-icon {
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 1;
  width: 32px;
  height: 20px;
  margin-top: -10px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  visibility: visible;
  -webkit-animation: zoomIn 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
          animation: zoomIn 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  pointer-events: none;
}
.ant-form-item-has-success.ant-form-item-has-feedback .ant-form-item-children-icon {
  color: #52c41a;
  -webkit-animation-name: diffZoomIn1 !important;
          animation-name: diffZoomIn1 !important;
}
.ant-form-item-has-warning .ant-form-item-split {
  color: #faad14;
}
.ant-form-item-has-warning :not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
.ant-form-item-has-warning :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper,
.ant-form-item-has-warning :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper,
.ant-form-item-has-warning :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover,
.ant-form-item-has-warning :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover,
.ant-form-item-has-warning :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:hover {
  background-color: #fff;
  border-color: #faad14;
}
.ant-form-item-has-warning :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:focus,
.ant-form-item-has-warning :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:focus,
.ant-form-item-has-warning :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:focus,
.ant-form-item-has-warning :not(.ant-input-disabled):not(.ant-input-borderless).ant-input-focused,
.ant-form-item-has-warning :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper-focused,
.ant-form-item-has-warning :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper-focused {
  border-color: #ffc53d;
  box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
  border-right-width: 1px !important;
  outline: 0;
}
.ant-form-item-has-warning .ant-calendar-picker-open .ant-calendar-picker-input {
  border-color: #ffc53d;
  box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
  border-right-width: 1px !important;
  outline: 0;
}
.ant-form-item-has-warning .ant-input-prefix,
.ant-form-item-has-warning .ant-input-number-prefix {
  color: #faad14;
}
.ant-form-item-has-warning .ant-input-group-addon,
.ant-form-item-has-warning .ant-input-number-group-addon {
  color: #faad14;
  border-color: #faad14;
}
.ant-form-item-has-warning .has-feedback {
  color: #faad14;
}
.ant-form-item-has-warning.ant-form-item-has-feedback .ant-form-item-children-icon {
  color: #faad14;
  -webkit-animation-name: diffZoomIn3 !important;
          animation-name: diffZoomIn3 !important;
}
.ant-form-item-has-warning .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input) .ant-select-selector {
  background-color: #fff;
  border-color: #faad14 !important;
}
.ant-form-item-has-warning .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-open .ant-select-selector,
.ant-form-item-has-warning .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-focused .ant-select-selector {
  border-color: #ffc53d;
  box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
  border-right-width: 1px !important;
  outline: 0;
}
.ant-form-item-has-warning .ant-input-number,
.ant-form-item-has-warning .ant-picker {
  background-color: #fff;
  border-color: #faad14;
}
.ant-form-item-has-warning .ant-input-number-focused,
.ant-form-item-has-warning .ant-picker-focused,
.ant-form-item-has-warning .ant-input-number:focus,
.ant-form-item-has-warning .ant-picker:focus {
  border-color: #ffc53d;
  box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
  border-right-width: 1px !important;
  outline: 0;
}
.ant-form-item-has-warning .ant-input-number:not([disabled]):hover,
.ant-form-item-has-warning .ant-picker:not([disabled]):hover {
  background-color: #fff;
  border-color: #faad14;
}
.ant-form-item-has-warning .ant-cascader-picker:focus .ant-cascader-input {
  border-color: #ffc53d;
  box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
  border-right-width: 1px !important;
  outline: 0;
}
.ant-form-item-has-error .ant-form-item-split {
  color: #ff4d4f;
}
.ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
.ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper,
.ant-form-item-has-error :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper,
.ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover,
.ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover,
.ant-form-item-has-error :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:hover {
  background-color: #fff;
  border-color: #ff4d4f;
}
.ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:focus,
.ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:focus,
.ant-form-item-has-error :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:focus,
.ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input-focused,
.ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper-focused,
.ant-form-item-has-error :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper-focused {
  border-color: #ff7875;
  box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
  border-right-width: 1px !important;
  outline: 0;
}
.ant-form-item-has-error .ant-calendar-picker-open .ant-calendar-picker-input {
  border-color: #ff7875;
  box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
  border-right-width: 1px !important;
  outline: 0;
}
.ant-form-item-has-error .ant-input-prefix,
.ant-form-item-has-error .ant-input-number-prefix {
  color: #ff4d4f;
}
.ant-form-item-has-error .ant-input-group-addon,
.ant-form-item-has-error .ant-input-number-group-addon {
  color: #ff4d4f;
  border-color: #ff4d4f;
}
.ant-form-item-has-error .has-feedback {
  color: #ff4d4f;
}
.ant-form-item-has-error.ant-form-item-has-feedback .ant-form-item-children-icon {
  color: #ff4d4f;
  -webkit-animation-name: diffZoomIn2 !important;
          animation-name: diffZoomIn2 !important;
}
.ant-form-item-has-error .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input) .ant-select-selector {
  background-color: #fff;
  border-color: #ff4d4f !important;
}
.ant-form-item-has-error .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-open .ant-select-selector,
.ant-form-item-has-error .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-focused .ant-select-selector {
  border-color: #ff7875;
  box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
  border-right-width: 1px !important;
  outline: 0;
}
.ant-form-item-has-error .ant-input-group-addon .ant-select.ant-select-single:not(.ant-select-customize-input) .ant-select-selector,
.ant-form-item-has-error .ant-input-number-group-addon .ant-select.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
  background-color: inherit;
  border: 0;
  box-shadow: none;
}
.ant-form-item-has-error .ant-select.ant-select-auto-complete .ant-input:focus {
  border-color: #ff4d4f;
}
.ant-form-item-has-error .ant-input-number,
.ant-form-item-has-error .ant-picker {
  background-color: #fff;
  border-color: #ff4d4f;
}
.ant-form-item-has-error .ant-input-number-focused,
.ant-form-item-has-error .ant-picker-focused,
.ant-form-item-has-error .ant-input-number:focus,
.ant-form-item-has-error .ant-picker:focus {
  border-color: #ff7875;
  box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
  border-right-width: 1px !important;
  outline: 0;
}
.ant-form-item-has-error .ant-input-number:not([disabled]):hover,
.ant-form-item-has-error .ant-picker:not([disabled]):hover {
  background-color: #fff;
  border-color: #ff4d4f;
}
.ant-form-item-has-error .ant-mention-wrapper .ant-mention-editor,
.ant-form-item-has-error .ant-mention-wrapper .ant-mention-editor:not([disabled]):hover {
  background-color: #fff;
  border-color: #ff4d4f;
}
.ant-form-item-has-error .ant-mention-wrapper.ant-mention-active:not([disabled]) .ant-mention-editor,
.ant-form-item-has-error .ant-mention-wrapper .ant-mention-editor:not([disabled]):focus {
  border-color: #ff7875;
  box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
  border-right-width: 1px !important;
  outline: 0;
}
.ant-form-item-has-error .ant-cascader-picker:hover .ant-cascader-picker-label:hover + .ant-cascader-input.ant-input {
  border-color: #ff4d4f;
}
.ant-form-item-has-error .ant-cascader-picker:focus .ant-cascader-input {
  background-color: #fff;
  border-color: #ff7875;
  box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
  border-right-width: 1px !important;
  outline: 0;
}
.ant-form-item-has-error .ant-transfer-list {
  border-color: #ff4d4f;
}
.ant-form-item-has-error .ant-transfer-list-search:not([disabled]) {
  border-color: #d9d9d9;
}
.ant-form-item-has-error .ant-transfer-list-search:not([disabled]):hover {
  border-color: #40a9ff;
  border-right-width: 1px !important;
}
.ant-form-item-has-error .ant-transfer-list-search:not([disabled]):focus {
  border-color: #40a9ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  border-right-width: 1px !important;
  outline: 0;
}
.ant-form-item-has-error .ant-radio-button-wrapper {
  border-color: #ff4d4f !important;
}
.ant-form-item-has-error .ant-radio-button-wrapper:not(:first-child)::before {
  background-color: #ff4d4f;
}
.ant-form-item-has-error .ant-mentions {
  border-color: #ff4d4f !important;
}
.ant-form-item-has-error .ant-mentions-focused,
.ant-form-item-has-error .ant-mentions:focus {
  border-color: #ff7875;
  box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
  border-right-width: 1px !important;
  outline: 0;
}
.ant-form-item-is-validating.ant-form-item-has-feedback .ant-form-item-children-icon {
  display: inline-block;
  color: #1890ff;
}
.ant-form {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
}
.ant-form legend {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  padding: 0;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  line-height: inherit;
  border: 0;
  border-bottom: 1px solid #d9d9d9;
}
.ant-form label {
  font-size: 14px;
}
.ant-form input[type='search'] {
  box-sizing: border-box;
}
.ant-form input[type='radio'],
.ant-form input[type='checkbox'] {
  line-height: normal;
}
.ant-form input[type='file'] {
  display: block;
}
.ant-form input[type='range'] {
  display: block;
  width: 100%;
}
.ant-form select[multiple],
.ant-form select[size] {
  height: auto;
}
.ant-form input[type='file']:focus,
.ant-form input[type='radio']:focus,
.ant-form input[type='checkbox']:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.ant-form output {
  display: block;
  padding-top: 15px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
}
.ant-form .ant-form-text {
  display: inline-block;
  padding-right: 8px;
}
.ant-form-small .ant-form-item-label > label {
  height: 24px;
}
.ant-form-small .ant-form-item-control-input {
  min-height: 24px;
}
.ant-form-large .ant-form-item-label > label {
  height: 40px;
}
.ant-form-large .ant-form-item-control-input {
  min-height: 40px;
}
.ant-form-item {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  margin-bottom: 24px;
  vertical-align: top;
  transition: margin-bottom 0.3s 0.017s linear;
}
.ant-form-item-with-help {
  margin-bottom: 0;
  transition: none;
}
.ant-form-item-hidden,
.ant-form-item-hidden.ant-row {
  display: none;
}
.ant-form-item-label {
  display: inline-block;
  flex-grow: 0;
  overflow: hidden;
  white-space: nowrap;
  text-align: right;
  vertical-align: middle;
}
.ant-form-item-label-left {
  text-align: left;
}
.ant-form-item-label-wrap {
  overflow: unset;
  line-height: 1.3215em;
  white-space: unset;
}
.ant-form-item-label > label {
  position: relative;
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  height: 32px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
}
.ant-form-item-label > label > .anticon {
  font-size: 14px;
  vertical-align: top;
}
.ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
  display: inline-block;
  margin-right: 4px;
  color: #ff4d4f;
  font-size: 14px;
  font-family: SimSun, sans-serif;
  line-height: 1;
  content: '*';
}
.ant-form-hide-required-mark .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
  display: none;
}
.ant-form-item-label > label .ant-form-item-optional {
  display: inline-block;
  margin-left: 4px;
  color: rgba(0, 0, 0, 0.45);
}
.ant-form-hide-required-mark .ant-form-item-label > label .ant-form-item-optional {
  display: none;
}
.ant-form-item-label > label .ant-form-item-tooltip {
  color: rgba(0, 0, 0, 0.45);
  cursor: help;
  -ms-writing-mode: lr-tb;
      writing-mode: horizontal-tb;
  -webkit-margin-start: 4px;
          margin-inline-start: 4px;
}
.ant-form-item-label > label::after {
  content: ':';
  position: relative;
  top: -0.5px;
  margin: 0 8px 0 2px;
}
.ant-form-item-label > label.ant-form-item-no-colon::after {
  content: ' ';
}
.ant-form-item-control {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.ant-form-item-control:first-child:not([class^='ant-col-']):not([class*=' ant-col-']) {
  width: 100%;
}
.ant-form-item-control-input {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 32px;
}
.ant-form-item-control-input-content {
  flex: auto;
  max-width: 100%;
}
.ant-form-item-explain,
.ant-form-item-extra {
  clear: both;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 1.5715;
  transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.ant-form-item-explain-connected {
  height: 0;
  min-height: 0;
  opacity: 0;
}
.ant-form-item-extra {
  min-height: 24px;
}
.ant-form-item .ant-input-textarea-show-count::after {
  margin-bottom: -22px;
}
.ant-form-item-with-help .ant-form-item-explain {
  height: auto;
  min-height: 24px;
  opacity: 1;
}
.ant-show-help {
  transition: height 0.3s linear, min-height 0.3s linear, margin-bottom 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-show-help-leave {
  min-height: 24px;
}
.ant-show-help-leave-active {
  min-height: 0;
}
.ant-show-help-item {
  overflow: hidden;
  transition: height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
}
.ant-show-help-item-appear,
.ant-show-help-item-enter {
  transform: translateY(-5px);
  opacity: 0;
}
.ant-show-help-item-appear-active,
.ant-show-help-item-enter-active {
  transform: translateY(0);
  opacity: 1;
}
.ant-show-help-item-leave-active {
  transform: translateY(-5px);
}
@-webkit-keyframes diffZoomIn1 {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes diffZoomIn1 {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@-webkit-keyframes diffZoomIn2 {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes diffZoomIn2 {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@-webkit-keyframes diffZoomIn3 {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes diffZoomIn3 {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.ant-form-rtl {
  direction: rtl;
}
.ant-form-rtl .ant-form-item-label {
  text-align: left;
}
.ant-form-rtl .ant-form-item-label > label.ant-form-item-required::before {
  margin-right: 0;
  margin-left: 4px;
}
.ant-form-rtl .ant-form-item-label > label::after {
  margin: 0 2px 0 8px;
}
.ant-form-rtl .ant-form-item-label > label .ant-form-item-optional {
  margin-right: 4px;
  margin-left: 0;
}
.ant-col-rtl .ant-form-item-control:first-child {
  width: 100%;
}
.ant-form-rtl .ant-form-item-has-feedback .ant-input {
  padding-right: 11px;
  padding-left: 24px;
}
.ant-form-rtl .ant-form-item-has-feedback .ant-input-affix-wrapper .ant-input-suffix {
  padding-right: 11px;
  padding-left: 18px;
}
.ant-form-rtl .ant-form-item-has-feedback .ant-input-affix-wrapper .ant-input {
  padding: 0;
}
.ant-form-rtl .ant-form-item-has-feedback .ant-input-number-affix-wrapper .ant-input-number {
  padding: 0;
}
.ant-form-rtl .ant-form-item-has-feedback .ant-input-search:not(.ant-input-search-enter-button) .ant-input-suffix {
  right: auto;
  left: 28px;
}
.ant-form-rtl .ant-form-item-has-feedback .ant-input-number {
  padding-left: 18px;
}
.ant-form-rtl .ant-form-item-has-feedback > .ant-select .ant-select-arrow,
.ant-form-rtl .ant-form-item-has-feedback > .ant-select .ant-select-clear,
.ant-form-rtl .ant-form-item-has-feedback :not(.ant-input-group-addon) > .ant-select .ant-select-arrow,
.ant-form-rtl .ant-form-item-has-feedback :not(.ant-input-group-addon) > .ant-select .ant-select-clear,
.ant-form-rtl .ant-form-item-has-feedback :not(.ant-input-number-group-addon) > .ant-select .ant-select-arrow,
.ant-form-rtl .ant-form-item-has-feedback :not(.ant-input-number-group-addon) > .ant-select .ant-select-clear {
  right: auto;
  left: 32px;
}
.ant-form-rtl .ant-form-item-has-feedback > .ant-select .ant-select-selection-selected-value,
.ant-form-rtl .ant-form-item-has-feedback :not(.ant-input-group-addon) > .ant-select .ant-select-selection-selected-value,
.ant-form-rtl .ant-form-item-has-feedback :not(.ant-input-number-group-addon) > .ant-select .ant-select-selection-selected-value {
  padding-right: 0;
  padding-left: 42px;
}
.ant-form-rtl .ant-form-item-has-feedback .ant-cascader-picker-arrow {
  margin-right: 0;
  margin-left: 19px;
}
.ant-form-rtl .ant-form-item-has-feedback .ant-cascader-picker-clear {
  right: auto;
  left: 32px;
}
.ant-form-rtl .ant-form-item-has-feedback .ant-picker {
  padding-right: 11px;
  padding-left: 29.2px;
}
.ant-form-rtl .ant-form-item-has-feedback .ant-picker-large {
  padding-right: 11px;
  padding-left: 29.2px;
}
.ant-form-rtl .ant-form-item-has-feedback .ant-picker-small {
  padding-right: 7px;
  padding-left: 25.2px;
}
.ant-form-rtl .ant-form-item-has-feedback.ant-form-item-has-success .ant-form-item-children-icon,
.ant-form-rtl .ant-form-item-has-feedback.ant-form-item-has-warning .ant-form-item-children-icon,
.ant-form-rtl .ant-form-item-has-feedback.ant-form-item-has-error .ant-form-item-children-icon,
.ant-form-rtl .ant-form-item-has-feedback.ant-form-item-is-validating .ant-form-item-children-icon {
  right: auto;
  left: 0;
}
.ant-form-rtl.ant-form-inline .ant-form-item {
  margin-right: 0;
  margin-left: 16px;
}

`;

export default AntFormStyle;
