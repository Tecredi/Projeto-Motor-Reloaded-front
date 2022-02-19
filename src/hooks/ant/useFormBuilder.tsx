import React from 'react';
import { Form, FormInstance, Input, Select } from 'antd';
import FloatLabel from '../../components/FloatLabel/FloatLabel';

export type FormData = {
  name: string;
  label: string;
  inputType?: 'select' | 'input' | 'custom';
  options?: Array<any>;
  required?: boolean;
  rules?: Array<any>;
  component?: any;
  className?: string;
}[];

const { Option } = Select;

const renderInput = (item: FormData[number]) => {
  switch (item.inputType) {
    case 'select':
      return (
        <Select
          allowClear
          showArrow={false}
          notFoundContent={''}
          showSearch
          filterOption={(input, option) =>
            (option.children as any).toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {item.options?.map((item) => (
            <Option value={item.id.toString()} key={item.id}>
              {item.text}
            </Option>
          ))}
        </Select>
      );
    case 'custom':
      return item.component;
    case 'input':
    default:
      return <Input />;
  }
};

export const useFormBuilder = (formData: FormData, form: FormInstance<any>) => {
  const renderFormItems = () =>
    formData.map((item) => {
      return (
        <FloatLabel
          className={item.className}
          key={item.name}
          label={item.label}
          form={form}
          name={item.name}
        >
          <Form.Item
            name={item.name}
            rules={[
              {
                required: !(item.required === false),
                message: 'Campo necessário',
              },
              ...(item.rules ?? []),
            ]}
          >
            {renderInput(item)}
          </Form.Item>
        </FloatLabel>
      );
    });

    return renderFormItems
};
