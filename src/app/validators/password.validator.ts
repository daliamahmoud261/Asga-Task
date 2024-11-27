import { AbstractControl, ValidationErrors } from '@angular/forms';
import { get, isNil } from 'lodash';

class ValidationRule {
  constructor(
    readonly key: string,
    readonly regexp?: RegExp,
    readonly validationFn?: (value: string) => ValidationErrors | null
  ) {}
}

const passwordRules: Array<ValidationRule> = [
  new ValidationRule('Min Eight Character', undefined, (value?: string) => {
    const safeValue = value || '';

    return safeValue.length >= 8 
      ? null
      :{ 'Min Eight Character': true }; 
  }),
  new ValidationRule('One Upper Case Character', /[\p{Lu}]/gu),
  new ValidationRule('One Special Character', /[^\w\s]+/gu),
  new ValidationRule('One Number', /[\d]/),
];

const testRegExRule = (
  rule: ValidationRule,
  value?: string
): ValidationErrors | null => {
  const safeValue = value || '';

  const matches = safeValue.match(rule.regexp as RegExp);

  if (!matches) {
    return {
      [rule.key]: true,
    };
  }

  return null;
};

const testValidationRule = (
  value: string,
  rule: ValidationRule
): ValidationErrors | null => {
  let error: ValidationErrors | null = null;

  if (rule.regexp) {
    error = testRegExRule(rule, value);
  } else if (typeof rule.validationFn === 'function') {
    error = rule.validationFn(value);
  }

  return error;
};

const testValidationRules = (
  value: string,
  rules: Array<ValidationRule>
): ValidationErrors | null =>
  rules.reduce((acc: ValidationErrors | null, rule: ValidationRule) => {
    const error = testValidationRule(value, rule);

    if (error) {
      return isNil(acc) ? { ...error } : { ...acc, ...error };
    }

    return acc;
  }, null);

export const passwordValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = get(control, 'value', '');

  return testValidationRules(value, passwordRules);
};
