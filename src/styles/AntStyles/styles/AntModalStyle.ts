import { createGlobalStyle } from 'styled-components';


const AntModal = createGlobalStyle`
.ant-modal {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  pointer-events: none;
  position: relative;
  top: 100px;
  width: auto;
  max-width: calc(100vw - 32px);
  margin: 0 auto;
  padding-bottom: 24px;
}
.ant-modal.ant-zoom-enter,
.ant-modal.antzoom-appear {
  transform: none;
  opacity: 0;
  -webkit-animation-duration: 0.3s;
          animation-duration: 0.3s;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.ant-modal-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
}
.ant-modal-mask-hidden {
  display: none;
}
.ant-modal-wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  outline: 0;
  -webkit-overflow-scrolling: touch;
}
.ant-modal-wrap {
  z-index: 1000;
}
.ant-modal-title {
  margin: 0;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  word-wrap: break-word;
}
.ant-modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  pointer-events: auto;
}
.ant-modal-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  padding: 0;
  color: rgba(0, 0, 0, 0.45);
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: color 0.3s;
}
.ant-modal-close-x {
  display: block;
  width: 56px;
  height: 56px;
  font-size: 16px;
  font-style: normal;
  line-height: 56px;
  text-align: center;
  text-transform: none;
  text-rendering: auto;
}
.ant-modal-close:focus,
.ant-modal-close:hover {
  color: rgba(0, 0, 0, 0.75);
  text-decoration: none;
}
.ant-modal-header {
  padding: 16px 24px;
  color: rgba(0, 0, 0, 0.85);
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 2px 2px 0 0;
}
.ant-modal-body {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5715;
  word-wrap: break-word;
}
.ant-modal-footer {
  padding: 10px 16px;
  text-align: right;
  background: transparent;
  border-top: 1px solid #f0f0f0;
  border-radius: 0 0 2px 2px;
}
.ant-modal-footer .ant-btn + .ant-btn:not(.ant-dropdown-trigger) {
  margin-bottom: 0;
  margin-left: 8px;
}
.ant-modal-open {
  overflow: hidden;
}
.ant-modal-centered {
  text-align: center;
}
.ant-modal-centered::before {
  display: inline-block;
  width: 0;
  height: 100%;
  vertical-align: middle;
  content: '';
}
.ant-modal-centered .ant-modal {
  top: 0;
  display: inline-block;
  padding-bottom: 0;
  text-align: left;
  vertical-align: middle;
}
@media (max-width: 767px) {
  .ant-modal {
    max-width: calc(100vw - 16px);
    margin: 8px auto;
  }
  .ant-modal-centered .ant-modal {
    flex: 1;
  }
}
.ant-modal-confirm .ant-modal-header {
  display: none;
}
.ant-modal-confirm .ant-modal-body {
  padding: 32px 32px 24px;
}
.ant-modal-confirm-body-wrapper::before {
  display: table;
  content: '';
}
.ant-modal-confirm-body-wrapper::after {
  display: table;
  clear: both;
  content: '';
}
.ant-modal-confirm-body .ant-modal-confirm-title {
  display: block;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
}
.ant-modal-confirm-body .ant-modal-confirm-content {
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
}
.ant-modal-confirm-body > .anticon {
  float: left;
  margin-right: 16px;
  font-size: 22px;
}
.ant-modal-confirm-body > .anticon + .ant-modal-confirm-title + .ant-modal-confirm-content {
  margin-left: 38px;
}
.ant-modal-confirm .ant-modal-confirm-btns {
  float: right;
  margin-top: 24px;
}
.ant-modal-confirm .ant-modal-confirm-btns .ant-btn + .ant-btn {
  margin-bottom: 0;
  margin-left: 8px;
}
.ant-modal-confirm-error .ant-modal-confirm-body > .anticon {
  color: #ff4d4f;
}
.ant-modal-confirm-warning .ant-modal-confirm-body > .anticon,
.ant-modal-confirm-confirm .ant-modal-confirm-body > .anticon {
  color: #faad14;
}
.ant-modal-confirm-info .ant-modal-confirm-body > .anticon {
  color: #1890ff;
}
.ant-modal-confirm-success .ant-modal-confirm-body > .anticon {
  color: #52c41a;
}
.ant-modal-wrap-rtl {
  direction: rtl;
}
.ant-modal-wrap-rtl .ant-modal-close {
  right: initial;
  left: 0;
}
.ant-modal-wrap-rtl .ant-modal-footer {
  text-align: left;
}
.ant-modal-wrap-rtl .ant-modal-footer .ant-btn + .ant-btn {
  margin-right: 8px;
  margin-left: 0;
}
.ant-modal-wrap-rtl .ant-modal-confirm-body {
  direction: rtl;
}
.ant-modal-wrap-rtl .ant-modal-confirm-body > .anticon {
  float: right;
  margin-right: 0;
  margin-left: 16px;
}
.ant-modal-wrap-rtl .ant-modal-confirm-body > .anticon + .ant-modal-confirm-title + .ant-modal-confirm-content {
  margin-right: 38px;
  margin-left: 0;
}
.ant-modal-wrap-rtl .ant-modal-confirm-btns {
  float: left;
}
.ant-modal-wrap-rtl .ant-modal-confirm-btns .ant-btn + .ant-btn {
  margin-right: 8px;
  margin-left: 0;
}
.ant-modal-wrap-rtl.ant-modal-centered .ant-modal {
  text-align: right;
}
`;

export default AntModal;
