import React, { useState } from 'react'

import { Input, Label, Button, Icon } from './components/shared'

import { TipCard } from './components/TipCard'

import { tips } from './consts'
import { validatePositiveNumbers } from './utils'

interface Values {
  bill: string
  person: string
  tip: number
  customTip: string
}

const DEFAULTS = {
  DEFAULT_VALUES: {
    bill: '',
    person: '',
    tip: 0,
    customTip: ''
  },
  DEFAULT_ERRORS: {
    bill: false,
    person: false
  }
}

const App: React.FC = () => {
  const { DEFAULT_VALUES, DEFAULT_ERRORS } = DEFAULTS
  const [values, setValues] = useState<Values>(DEFAULT_VALUES)
  const [errors, setErrors] = useState(DEFAULT_ERRORS)

  const handleValueChange = (value: string, type: keyof Values): void => {
    const isValid = validatePositiveNumbers(value)
    setErrors(prevErrors => ({
      ...prevErrors,
      [type]: isValid.error
    }))
    setValues(prevValues => ({
      ...prevValues,
      [type]: isValid.error ? prevValues[type] : value
    }))
  }

  const resetForm = (): void => {
    setValues(DEFAULT_VALUES)
    setErrors(DEFAULT_ERRORS)
  }

  const bill = parseFloat(values.bill)
  const person = parseFloat(values.person)
  const tipAmount = ((bill * (values.tip || +values.customTip)) / 100) / person || 0
  const total = (bill + (tipAmount * person)) / person || 0

  return (
    <div className="container">
      <Icon name='logo' />
      <div className="wrapper">
        <div className="fields">
          <div className="fields__item">
            <Label>Bill</Label>
            <Input
              placeholder="0"
              icon={<Icon name='dollar' />}
              error={errors.bill}
              value={values.bill}
              onChange={(e) => { handleValueChange(e?.target?.value, 'bill') }}
            />
          </div>
          <div className="fields__item">
            <Label>Select Tip %</Label>
            <div className="fields__item--tips">
              {tips.map(({ label, value }) => (
                <TipCard
                  key={value}
                  isSelected={values.customTip ? false : value === values.tip}
                  value={value}
                  onClick={() => {
                    setValues((prevValues) => ({
                      ...prevValues,
                      tip: value,
                      customTip: DEFAULT_VALUES.customTip
                    }))
                  }}
                >
                  {label}
                </TipCard>
              ))}
              <div className="fields__item--custom">
                <input
                  placeholder="Custom"
                  value={values.customTip}
                  min={0}
                  max={100}
                  onChange={(e) => {
                    const pattern = /^(?:\d+|0|\s*)$/
                    if (pattern.test(e.target.value) && +e.target.value <= 100) {
                      setValues((prevValues) => ({
                        ...prevValues,
                        tip: DEFAULT_VALUES.tip,
                        customTip: e?.target?.value
                      }))
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="fields__item">
            <Label>Number of People</Label>
            <Input
              placeholder="0"
              icon={<Icon name='user' />}
              value={values.person}
              error={errors.person}
              onChange={(e) => { handleValueChange(e.target.value, 'person') }}
            />
          </div>
        </div>
        <div className="results">
          <div className="results__item">
            <div className="results__text">
              <span className="results__text-title">Tip Amount</span>
              <span className="results__text-description">/ person</span>
            </div>
            <div className="results__amount">
              ${(errors.bill || errors.person) ? '0.00' : tipAmount.toFixed(2)}
            </div>
          </div>
          <div className="results__item">
            <div className="results__text">
              <span className="results__text-title">Total</span>
              <span className="results__text-description">/ person</span>
            </div>
            <div className="results__amount">
               ${(errors.bill || errors.person) ? '0.00' : total.toFixed(2)}
            </div>
          </div>
          <Button
            disabled={!bill || !person || !(values.tip || values.customTip)}
            onClick={resetForm}
          >
            RESET
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
