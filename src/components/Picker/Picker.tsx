import * as React from 'react';
interface Props{
    options: Array<string>,
    value: string,
    onChange: Function
}

export default class Picker extends React.Component<Props, any> {
  render() {
    const { value, onChange, options } = this.props;

    return (
      <span>
        <h1>{value}</h1>
        <select onChange={e => onChange(e.target.value)}
                value={value}>
          {options.map(option =>
            <option value={option} key={option}>
              {option}
            </option>)
          }
        </select>
      </span>
    )
  }
}
