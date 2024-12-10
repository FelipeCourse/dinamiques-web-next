import { describe, expect, it } from 'vitest';

import { categorySchema } from './category.schema';

describe('CategorySchema unit tests', () => {
  it('should pass with valid category data', () => {
    const validCategory = {
      name: 'Valid Category Name',
      color: '#FF5733',
      isActive: true,
    };
    const result = categorySchema.safeParse(validCategory);
    expect(result.success).toBe(true);
  });

  it('should fail if name is missing or empty', () => {
    const invalidCategory = {
      name: '',
      color: '#FF5733',
      isActive: true,
    };
    const result = categorySchema.safeParse(invalidCategory);
    expect(result.success).toBe(false);
    const errors = result?.error?.errors;
    const nameError = errors?.find((error) => error.path[0] === 'name');
    expect(nameError).toBeDefined();
    expect(nameError?.message).toBe('Nome é obrigatório.');
    expect(nameError?.path).toEqual(['name']);
    expect(nameError?.code).toBe('too_small');
  });

  it('should fail if name is too short', () => {
    const invalidCategory = {
      name: 'No',
      color: '#FF5733',
      isActive: true,
    };
    const result = categorySchema.safeParse(invalidCategory);
    expect(result.success).toBe(false);
    const errors = result?.error?.errors;
    const nameError = errors?.find((error) => error.path[0] === 'name');
    expect(nameError).toBeDefined();
    expect(nameError?.message).toBe('Nome deve ter pelo menos 3 caracteres.');
    expect(nameError?.path).toEqual(['name']);
    expect(nameError?.code).toBe('too_small');
  });

  it('should fail if name is too long', () => {
    const invalidCategory = {
      name: 'A'.repeat(51),
      color: '#FF5733',
      isActive: true,
    };
    const result = categorySchema.safeParse(invalidCategory);
    expect(result.success).toBe(false);
    const errors = result?.error?.errors;
    const nameError = errors?.find((error) => error.path[0] === 'name');
    expect(nameError).toBeDefined();
    expect(nameError?.message).toBe('Nome deve ter no máximo 50 caracteres.');
    expect(nameError?.path).toEqual(['name']);
    expect(nameError?.code).toBe('too_big');
  });

  it('should fail if color is not a valid hexadecimal string', () => {
    const invalidCategory = {
      name: 'Valid Category',
      color: 'invalid-color',
      isActive: true,
    };
    const result = categorySchema.safeParse(invalidCategory);
    expect(result.success).toBe(false);
    const errors = result?.error?.errors;
    const colorError = errors?.find((error) => error.path[0] === 'color');
    expect(colorError).toBeDefined();
    expect(colorError?.message).toBe('Cor deve ser um hexadecimal válido.');
    expect(colorError?.path).toEqual(['color']);
  });

  it('should pass if color is a valid hexadecimal string', () => {
    const validCategory = {
      name: 'Valid Category',
      color: '#FF5733',
      isActive: true,
    };
    const result = categorySchema.safeParse(validCategory);
    expect(result.success).toBe(true);
  });

  it('should pass if isActive is a boolean true', () => {
    const validCategory = {
      name: 'Valid Category',
      color: '#FF5733',
      isActive: true,
    };
    const result = categorySchema.safeParse(validCategory);
    expect(result.success).toBe(true);
    expect(result?.data?.isActive).toBe(true);
  });

  it('should pass if isActive is a boolean false', () => {
    const validCategory = {
      name: 'Valid Category',
      color: '#FF5733',
      isActive: false,
    };
    const result = categorySchema.safeParse(validCategory);
    expect(result.success).toBe(true);
    expect(result?.data?.isActive).toBe(false);
  });

  it('should pass if isActive is a string "true"', () => {
    const validCategory = {
      name: 'Valid Category',
      color: '#FF5733',
      isActive: 'true',
    };
    const result = categorySchema.safeParse(validCategory);
    expect(result.success).toBe(true);
    expect(result?.data?.isActive).toBe(true);
  });

  it('should pass if isActive is a string "false"', () => {
    const validCategory = {
      name: 'Valid Category',
      color: '#FF5733',
      isActive: 'false',
    };
    const result = categorySchema.safeParse(validCategory);
    expect(result.success).toBe(true);
    expect(result?.data?.isActive).toBe(false);
  });
});
