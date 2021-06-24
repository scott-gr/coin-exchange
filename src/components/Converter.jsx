import React, { Component } from "react";
import styled from '@emotion/styled';





const FormInput = styled.div `
select {
  max-width: 125px;
  &:required:invalid {
  color: var(--light-grey)
}
  }`

const Option = styled.option`
[default] {
  display: none
}`

const Subtitle = styled.h3 `
  color:var(--white);
  font-size: xx-large;
  justify-self: center;
`

const ConverterContainer = styled.div `
  display: inline-grid;
  justify-content: center;
  border-radius: 20px;
  color: var(--white);
	background: var(--dark-grey);
	box-shadow: inset 2px 2px 0px #6c6e75, inset -4px -4px 0px #505257;
  border: none;
  padding: 0 30px 30px 30px;
  width: fit-content;
  grid-template-rows: auto auto;
`

const ConvertForm = styled.form`
  display: inline-grid;
  grid-template-columns: auto auto;
  row-gap: 20px;
  column-gap: 20px;
  margin-bottom: 10px;
`

const Button = styled.button `
	border: none;
	border-radius: 50px;
	background: #05668d;
	box-shadow: 6px 6px 0px #045778, -2px -2px 0px #0675a2;
	height: 40px;
	font-weight: bold;
	min-width: 100px;
	margin: 12px;
	padding: 10px;
	font-size: large;
	color: var(--white);
	cursor: pointer;
  &:focus {
	background: #05669d;
  box-shadow: inset -2px -2px 0px #0675a2, inset 7px 7px 0px #045778;
  outline: 0;
}
  `

const rates = {
	COPPER: {
		COPPER: 1,
		SILVER: 0.1,
		ELECTRUM: 0.02,
		GOLD: 0.01,
		PLATINUM: 0.001,
	},
	SILVER: {
		COPPER: 10,
		SILVER: 1,
		ELECTRUM: 0.2,
		GOLD: 0.1,
		PLATINUM: 0.01,
	},
	ELECTRUM: {
		COPPER: 50,
		SILVER: 5,
		ELECTRUM: 1,
		GOLD: 0.5,
		PLATINUM: 0.05,
	},
	GOLD: {
		COPPER: 100,
		SILVER: 10,
		ELECTRUM: 2,
		GOLD: 1,
		PLATINUM: 0.1,
	},
	PLATINUM: {
		COPPER: 1000,
		SILVER: 100,
		ELECTRUM: 20,
		GOLD: 10,
		PLATINUM: 1,
	},
};

class Converter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: Number(""),
			fromCoin: "",
			tooCoin: "",
			result: Number(""),
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === "select" ? target.selected : target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	handleFormSubmit = event => {
		event.preventDefault();
		if (
			this.state.tooCoin === "" ||
			this.state.fromCoin === "" ||
			this.state.tooCoin === "DEFAULT" ||
			this.state.fromCoin === "DEFAULT"
		) {
			alert("Please select coins");
		} else if (this.state.fromCoin === this.state.tooCoin) {
			this.setState({ result: this.state.amount });
		} else {
			this.setState({
				result:
					this.state.amount * rates[this.state.fromCoin][this.state.tooCoin],
			});
		}
		return parseFloat(this.state.result);
	};

	render() {
		return (
			<ConverterContainer>
				<Subtitle>Coin Exchange</Subtitle>
				<ConvertForm onSubmit={this.handleFormSubmit}>
					<FormInput>
						<label htmlFor="fromCoin">from this coin...</label>
						<select
							name="fromCoin"
							type="select"
							onChange={this.handleInputChange}
							selected={this.state.fromCoin}
							defaultValue={"DEFAULT"}
						>
							{" "}
							<Option disabled hidden value="DEFAULT">
								Select Coin...
							</Option>
							<Option value="COPPER">Copper</Option>
							<Option value="SILVER">Silver </Option>
							<Option value="ELECTRUM">Electrum </Option>
							<Option value="GOLD">Gold </Option>
							<Option value="PLATINUM">Platinum </Option>
						</select>
					</FormInput>
					<FormInput>
						<label htmlFor="amount">Old coins</label>
						<input
							name="amount"
							type="number"
							onChange={this.handleInputChange}
							value={this.state.amount}
						/>
					</FormInput>

					<FormInput>
						<label htmlFor="tooCoinLabel">to this coin</label>
						<select
							name="tooCoin"
							type="select"
							onChange={this.handleInputChange}
							selected={this.state.tooCoin}
							defaultValue={"DEFAULT"}
						>
							<Option disabled hidden value="DEFAULT">
								Select Coin...
							</Option>
							<Option value="COPPER">Copper </Option>
							<Option value="SILVER">Silver </Option>
							<Option value="ELECTRUM">Electrum </Option>
							<Option value="GOLD">Gold </Option>
							<Option value="PLATINUM">Platinum </Option>
						</select>
					</FormInput>
					<FormInput>
						<label htm="amount">New coins</label>
						<input
							name="result"
							type="number"
							readOnly={true}
							onChange={this.handleInputChange}
							value={this.state.result}
						/>
					</FormInput>
					<Button type="submit" value="Submit" text="Exchange Coins"></Button>
				</ConvertForm>
			</ConverterContainer>
		);
	}
}

export default Converter;