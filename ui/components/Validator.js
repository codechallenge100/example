import React from 'react';

export default class Validator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showNumericError: false,
            showStudentResponseError: false,
            unitBeingMeasured: '',
            targetUnitOfMeasure: '',
            valid: false,
            options: [
                {value: 'rankine', text: 'Rankine'},
                {value: 'celsius', text: 'Celsius'},
                {value: 'fahrenheit', text: 'Fahrenheit'},
                {value: 'kelvin', text: 'Kelvin'},
                {value: 'liters', text: 'Liters'},
                {value: 'tablespoons', text: 'Tablespoons'},
                {value: 'cubic-inches', text: 'Cubic Inches'},
                {value: 'cups', text: 'Cups'},
                {value: 'cubic-feet', text: 'Cubic Feet'},
                {value: 'gallons', text: 'Gallons'}
            ],
            optionsTarget: [],
            valid: false,
            disabled: true,
            numericalValue: 0,
            studentResponse: 0,
            showGrade: false
        };

        this.numericalValueChange = this.numericalValueChange.bind(this);
        this.studentResponseChange = this.studentResponseChange.bind(this);
        this.unitOfMeasureChange = this.unitOfMeasureChange.bind(this);
        this.targetUnitOfMeasure = this.targetUnitOfMeasure.bind(this);
        this.validate = this.validate.bind(this);
        this.grade = this.grade.bind(this);

        this.temp = [
            'rankine',
            'celsius',
            'fahrenheit',
            'kelvin'
        ];

        this.volumes = [
            'liters',
            'tablespoons',
            'cubic-inches',
            'cups',
            'cubic-feet',
            'gallons'
        ]
    }

    unitOfMeasureChange(e) {
        this.setState({ unitBeingMeasured: e.target.value }, this.buildOptionsList);
        this.validate();
    }

    targetUnitOfMeasure(e) {
        this.setState({ targetUnitOfMeasure: e.target.value }, this.buildOptionsList);
        this.validate();
    }

    numericalValueChange(e) {
        if (e.target.value === "") {
            this.setState({ showNumericError: false });
        }

        this.setState({ showNumericError: false, numericalValue: parseFloat(e.target.value).toFixed(2) });
        this.validate();
    }

    studentResponseChange(e) {
        if (e.target.value === "") {
            this.setState({ showStudentResponseError: false });
        }

        this.setState({ showStudentResponseError: false, studentResponse: parseFloat(e.target.value).toFixed(2) });
        this.validate();
    }

    validate() {
        if (this.state.unitBeingMeasured && this.state.targetUnitOfMeasure && this.state.studentResponse && this.state.numericalValue) {
            this.setState({ disabled: false, showGrade: true });
            this.grade();
        } else {
            this.setState({ disabled: true, showGrade: false });
        }
    }

    buildOptionsList() {
        switch (this.state.unitBeingMeasured) {
            case "fahrenheit":
            case "celsius": 
            case "kelvin": 
            case 'rankine':
                this.setState({
                    optionsTarget: this.temp.filter(e => e !== this.state.unitBeingMeasured)
                });
                break;
            default:
                this.setState({
                    optionsTarget: this.volumes.filter(e => e !== this.state.unitBeingMeasured)
                })
                
        }
    }

    convertFahrenheit (input, output) {
        switch(output) {
            case "rankine":
                return parseFloat((input * 1.0) - 459.67).toFixed(2);
            case "kelvin":
                return parseFloat(((input - 32) / 1.8) + 273.15).toFixed(2)
            case "celsius":
                return parseFloat((input - 32) / 1.8).toFixed(2);
            default: 
                return;
        }
    }

    convertCelsius (input, output) {
        switch(output) {
            case "fahrenheit":
                return parseFloat((input * 1.8) + 32).toFixed(2);
            case "kelvin":
                return parseFloat((input + 273.15)).toFixed(2);
            case "rankine":
                return parseFloat((input * 9/5) + 491.67).toFixed(2);
            default: 
                return;
        }
    }

    convertKelvin (input, output) {
        switch(output) {
            case "rankine":
                return parseFloat((input * 1.8)).toFixed(2);
            case "fahrenheit":
                return parseFloat((((input - 273.15) * 9/5) + 32)).toFixed(2);
            case "celsius":
                return parseFloat((input - 273.15)).toFixed(2);
            default: 
                return;
        }
    }

    convertRankine (input, output) {
        switch(output) {
            case "fahrenheit":
                return parseFloat((input - 459.67)).toFixed(2);
            case "kelvin":
                return parseFloat((input * 5/9)).toFixed(2);
            case "celsius":
                return parseFloat((input - 491.67) * 5/9);
            default: 
                return;
        }
    }

    convertLiters (input, output) {
        switch(output) {
            case "tablespoons":
                return parseFloat(input * 67.628).toFixed(2);
            case "cubic-inches":
                return parseFloat(input * 61.024).toFixed(2);
            case "cups":
                return parseFloat((input * 4.227)).toFixed(2);
            case "cubic-feet":
                return parseFloat(input / 28.317).toFixed(2);
            case "gallons":
                return parseFloat(input / 3.785).toFixed(2);
            default: 
                return;
        }
    }

    convertTablespoons (input, output) {
        switch(output) {
            case "liters":
                return parseFloat(input / 67.628).toFixed(2);
            case "cubic-inches":
                return parseFloat(input / 1.108).toFixed(2);
            case "cups":
                return parseFloat((input / 16)).toFixed(2);
            case "cubic-feet":
                return parseFloat(input / 1915.013).toFixed(2);
            case "gallons":
                return parseFloat(input / 256).toFixed(2);
            default: 
                return;
        }
    }

    convertCups (input, output) {
        switch(output) {
            case "tablespoons":
                return parseFloat(input * 16).toFixed(2);
            case "liters":
                return parseFloat(input / 4.227).toFixed(2);
            case "cubic-inches":
                return parseFloat((input * 14.4375)).toFixed(2);
            case "cubic-feet":
                return parseFloat(input / 119.688).toFixed(2);
            case "gallons":
                return parseFloat(input / 16).toFixed(2);
            default: 
                return;
        }
    }

    convertCubicInches (input, output) {
        switch(output) {
            case "tablespoons":
                return parseFloat(input * 1.108).toFixed(2);
            case "liters":
                return parseFloat(input / 61.024).toFixed(2);
            case "cups":
                return parseFloat((input / 14.438)).toFixed(2);
            case "cubic-feet":
                return parseFloat(input / 1728).toFixed(2);
            case "gallons":
                return parseFloat(input / 231).toFixed(2);
            default: 
                return;
        }
    }

    convertCubicFeet (input, output) {
        switch(output) {
            case "tablespoons":
                return parseFloat(input * 1915.013).toFixed(2);
            case "liters":
                return parseFloat(input / 28.317).toFixed(2);
            case "cups":
                return parseFloat((input * 119.688)).toFixed(2);
            case "cubic-inches":
                return parseFloat(input * 1728).toFixed(2);
            case "gallons":
                return parseFloat(input * 7.481).toFixed(2);
            default: 
                return;
        }
    }

    convertGallons (input, output) {
        switch(output) {
            case "tablespoons":
                return parseFloat(input * 256).toFixed(2);
            case "liters":
                return parseFloat(input * 3.785).toFixed(2);
            case "cups":
                return parseFloat((input * 16)).toFixed(2);
            case "cubic-inches":
                return parseFloat(input * 231).toFixed(2);
            case "cubic-feet":
                return parseFloat(input / 7.481).toFixed(2);
            default: 
                return;
        }
    }

    grade() {
        let value;

        switch(this.state.unitBeingMeasured) {
            case "fahrenheit":
                value = parseFloat(this.convertFahrenheit(this.state.numericalValue, this.state.targetUnitOfMeasure)).toFixed(2);
                break;
            case "celsius":
                value = this.convertCelsius(this.state.numericalValue, this.state.targetUnitOfMeasure);
                break;
            case "kelvin":
                value = this.convertKelvin(this.state.numericalValue, this.state.targetUnitOfMeasure);
                break;
            case "rankine":
                value = this.convertRankine(this.state.numericalValue, this.state.targetUnitOfMeasure);
                break;
            case "liters":
                    value = this.convertLiters(this.state.numericalValue, this.state.targetUnitOfMeasure);
                    break;
            case "tablespoons":
                    value = this.convertTablespoons(this.state.numericalValue, this.state.targetUnitOfMeasure);
                    break;
            case "cups":
                    value = this.convertCups(this.state.numericalValue, this.state.targetUnitOfMeasure);
                    break;
            case "cubic-inches":
                    value = this.convertCubicInches(this.state.numericalValue, this.state.targetUnitOfMeasure);
                    break;
            case "cubic-feet":
                value = this.convertCubicFeet(this.state.numericalValue, this.state.targetUnitOfMeasure);
                break;
            case "gallons":
                value = this.convertGallons(this.state.numericalValue, this.state.targetUnitOfMeasure);
                break;
        }

        if (value === this.state.studentResponse) {
            this.setState({ valid: true, showGrade: true });
        } else {
            this.setState({ valid: false, showGrade: true });
        }
    }

    render() {
        return (
           <div>
                <h1>Student Grade Validator</h1>
                <hr />
                
                <form>
                    <label htmlFor="numericalValue">Input Numerical Value</label>
                    <input className="form-control" onChange={this.numericalValueChange} onBlur={this.numericalValueChange} type="text" id="numericalValue" />
                    
                    <label htmlFor="unitOfMeasure">Input Unit of Measure</label>
                    <select className="form-control" defaultValue='default' onChange={this.unitOfMeasureChange}>
                        <option value="default" disabled>Please Select</option>
                        {this.state.options.map((option, key) => {
                            return <option key={key} value={option.value}>{option.text}</option>
                        })}
                    </select>

                    <label htmlFor="targetOfMeasure">Target Unit of Measure</label>
                    <select className="form-control" defaultValue='default' onChange={this.targetUnitOfMeasure}>
                        <option value="default" disabled>Please Select</option>
                        {this.state.optionsTarget.map((option, key) => {
                            return <option key={key} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
                        })}
                    </select>

                    <label htmlFor="studentResponse">Student Response</label>
                    <input  className="form-control" onChange={this.studentResponseChange} onBlur={this.studentResponseChange} type="text" id="studentResponse" />
                </form>

                <hr />
                {this.state.showGrade ? this.state.valid ? <h2 className="correct">Correct</h2> : <h2 className="incorrect">Incorrect</h2> : ""}
            </div>
        )
    }
}