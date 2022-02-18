import { Form } from 'antd';
import React, { useState } from 'react';
import Checkbox from '../../../../components/CheckBox/CheckBox';

const LoginCheckbox = ({ form, name, errorMessage, text }) => {
  const [value, setValue] = useState(false);

  return (
    <Form.Item
      name={name}
      validateTrigger={'onSubmit'}
      rules={[
        () => ({
          validator(_, value) {
            if (value === true) {
              return Promise.resolve();
            }
            return Promise.reject(<span className="nowrap">{errorMessage}</span>);
          },
        }),
      ]}
    >
      <Checkbox
        value={value}
        onChange={(event) => {
          const checked = event.target.checked;
          form.setFieldsValue({ [name]: checked });
          setValue(checked);
        }}
        className="mb-3 mt-2"
        text={text}
      />
    </Form.Item>
  );
};

export default LoginCheckbox;
