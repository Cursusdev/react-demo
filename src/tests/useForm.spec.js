import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../hooks/useForm';


describe('useForm', () => {
  describe('smoke tests', () => {
    it('should be a function', () => {
      expect(typeof useForm).toBe('function');
    });

    it('should require the `validations` option', () => {
      renderHook(() => {
        expect(() => {
          useForm({});
        }).toThrow('the option `validations` is required');
      });
    });

    it('should require the validation option to be an object', () => {
      renderHook(() => {
        expect(() => {
          useForm({
            validations: true,
          });
        }).toThrow('the option `validations` should be an object');
      });
    });
  });

  describe('validateField', () => {
    describe('required', () => {
      it("should return a default error message for fields that don't have a value", () => {

        const { result } = renderHook(() => useForm({
          validations: {
            email: {
              required: {
                value: true,
              },
            },
          },
        }));

        const bindFieldResult = result.current.bindField('email');

        act(() => {
          bindFieldResult.onChange({ target: { value: 'gg' } });
        });

        expect(result.current.values.email).toBe('gg');
        expect(result.current.fields.email).toBe('');

        act(() => {
          bindFieldResult.onChange({ target: { value: '' } });
        });

        expect(result.current.values.email).toBe('');
        expect(result.current.fields.email).toBe('required');
      });

      it('should return a custom error message', () => {
        const { result } = renderHook(() => useForm({
          validations: {
            email: {
              required: {
                value: true,
                message: "Ce champ est requis",
              },
            },
          },
        }));

        const bindFieldResult = result.current.bindField('email');

        act(() => {
          bindFieldResult.onChange({ target: { value: 'gg' } });
        });

        expect(result.current.values.email).toBe('gg');
        expect(result.current.fields.email).toBe('');

        act(() => {
          bindFieldResult.onChange({ target: { value: '' } });
        });

        expect(result.current.values.email).toBe('');
        expect(result.current.fields.email).toBe('Ce champ est requis');
      });
    });

    describe('error', () => {
      it('should return an error message if the value does not satisfy the pattern', () => {
        const { result } = renderHook(() => useForm({
          validations: {
            email: {
              error: {
                value: /\w+@\w+\.com/gi,
              },
            },
          },
        }));

        expect(result.current.validateField('email', '')).toBe('');
      });

      it('should return an custom error message if the message attribute exists', () => {
        const { result } = renderHook(() => useForm({
          validations: {
            email: {
              error: {
                admit: true,
                value: /\w+@\w+\.com/gi,
                message: 'L\'adresse email n\'est pas valide',
              },
            },
          },
        }));

        const bindFieldResult = result.current.bindField('email');

        act(() => {
          bindFieldResult.onChange({ target: { value: 'gg' } });
        });

        expect(result.current.validateField('email', 'gg')).toBe('L\'adresse email n\'est pas valide');
      });
    });
  });

  describe('bindField', () => {
    it('should validate the name parameter', () => {
      const { result } = renderHook(() => useForm({
        validations: {
          email: {
            required: {
              value: true,
            },
          },
        },
      }));

      expect(() => {
        result.current.bindField();
      }).toThrow('The field name parameter is required');

      expect(() => {
        result.current.bindField(1);
      }).toThrow('The field name should be a string');
    });

    it('should return an object with value and onChange attributes', () => {
      const { result } = renderHook(() => useForm({
        validations: {
          email: {
            required: {
              value: true,
            },
          }
        }
      }));

      expect(result.current.bindField('email')).toEqual({
        value: "",
        onChange: expect.any(Function),
      });
    });

    describe('onChange', () => {
      it('should update the Hook state when called', () => {
        const { result } = renderHook(() => useForm({
          validations: {
            username: {
              required: {
                value: true,
              },
            },
          },
        }));

        const bindFieldResult = result.current.bindField('username');

        act(() => {
          bindFieldResult.onChange({ target: { value: 'John' } });
        });

        expect(result.current.values.username).toBe('John');
        expect(result.current.fields.username).toBe('');

        act(() => {
          bindFieldResult.onChange({ target: { value: '' } });
        });

        expect(result.current.values.username).toBe('');
        expect(result.current.fields.username).toBe('required');
      });
    });
  });

  describe('initialValues', () => {
    it('should trhow an Error if the initialValues is not an object', () => {
      renderHook(() => {
        expect(() => {
          useForm({
            initialValues: true,
          })
        }).toThrow('the option `initialValues` should be an object');
      });
    });

    it('should initialize the values state with the initial values', () => {
      const { result } = renderHook(() => useForm({
        initialValues: {
          username: 'Carlos',
        },
        validations: {},
      }));

      expect(result.current.values.username).toBe('Carlos');
    });
  });
});
