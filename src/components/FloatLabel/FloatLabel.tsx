import React, { useState } from 'react';

const FloatLabel = ({label, form, name, children, className = ''}) => {
  const [focus, setFocus] = useState(false);
  const value = form.getFieldValue(name);
  const labelClass = focus || value ? 'label label-float' : 'label';

  return (
    <div className={`float-label ${className}`} onBlur={() => setFocus(false)} onFocus={() => setFocus(true)}>
      {children}
      <label className={labelClass}>{label}</label>
    </div>
  );
};

export default FloatLabel;
