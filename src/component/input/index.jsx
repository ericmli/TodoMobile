import React from 'react'
import { View, TextInput, TextError, TextTopInput, TextInputDate, Touch, TextDate, TextInputNote } from './styles'
import { Controller } from 'react-hook-form'
import SvgTime from '../../img/svg/time'
import SvgDate from '../../img/svg/date'

export function Input({ name, errors, inputRef, control, onSubmitEditing, placeholder }) {
  return (
    <View>
      <TextTopInput>{placeholder}</TextTopInput>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            ref={inputRef}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}

          />
        )}
      />
      {errors[name] && <TextError>{errors[name].message}</TextError>}
    </View>
  )
}

export function InputDate({ placeholder, onPress, value }) {
  return (
    <Touch onPress={onPress}>
      <TextTopInput>{placeholder}</TextTopInput>

      <TextInputDate>
        <TextDate>{value}</TextDate>
        <SvgDate/>
      </TextInputDate>
    </Touch>
  )
}

export function InputTime({ placeholder, onPress, value }) {
  return (
    <Touch onPress={onPress}>
      <TextTopInput>{placeholder}</TextTopInput>

      <TextInputDate>
        <TextDate>{value}</TextDate>
        <SvgTime/>
      </TextInputDate>
    </Touch>
  )
}

export function InputNote({ name, errors, inputRef, control, onSubmitEditing, placeholder }) {
  return (
    <View>
      <TextTopInput>{placeholder}</TextTopInput>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputNote
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            ref={inputRef}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}

          />
        )}
      />
      {errors[name] && <TextError>{errors[name].message}</TextError>}
    </View>
  )
}
