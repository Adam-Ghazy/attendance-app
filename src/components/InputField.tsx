import React from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';

interface InputFieldProps<T extends FieldValues>
  extends React.ComponentProps<typeof TextInput> {
  control?: Control<T>;
  errors: FieldErrors<FieldValues>;
  validation?: RegisterOptions;
  name: Path<T>;
  extra?: StyleProp<TextStyle>;
  placeholder?: string;
}
const styles = StyleSheet.create({
  input: {
    height: 52,
    marginTop: 10,
    borderWidth: 1.5,
    padding: 16,
    borderRadius: 8,
  },
  errorText: {
    position: 'absolute',
    bottom: -25,
    color: 'red',
  },
  relative: {
    position: 'relative',
  },
});

const InputField = <T extends FieldValues>({
  control,
  errors,
  name,
  validation,
  extra = {},
  ...rest
}: InputFieldProps<T>) => {
  return (
    <View style={(styles.relative, extra)}>
      <Controller
        control={control}
        rules={validation}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={styles.input}
            {...rest}
          />
        )}
        name={name}
      />
      {errors[name] && (
        <Text style={styles.errorText}>
          {errors[name]?.message?.toString()}
        </Text>
      )}
    </View>
  );
};

export default InputField;
