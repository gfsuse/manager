import { GlobalConstant } from '@common/constants/global.constant';
import {
  FormlyComponents,
} from '@common/neuvector-formly/neuvector-formly.module';

export const EnableTlsVerificationToggleField = {
    key: 'tls.enable_tls_verification',
    type: FormlyComponents.TOGGLE,
    templateOptions: {
      ariaLabelledBy: 'setting.ENABLE_TLS_VERIFICATION',
    },
    expressionProperties: {
      'templateOptions.disabled': '!formState.permissions.isTlsAuthorized',
    },
  };

export const TlsTableField = {
  key: 'tls.cacerts',
  type: FormlyComponents.EDIT_TABLE,
  templateOptions: {
    addButtonText: 'setting.tls.NAME'
  },
  expressionProperties: {
    'templateOptions.disabled': '!formState.permissions.isTlsAuthorized',
  },
  fieldArray: {
    fieldGroup: [
      {
        key: 'context',
        wrappers: [FormlyComponents.READONLY_WRAPPER],
        type: FormlyComponents.TEXT_AREA,
        templateOptions: {
          viewValue: 'setting.tls.CERTIFICATE',
          label: 'setting.tls.CERTIFICATE_CONTEXT',
          isCell: true,
          required: true,
          hideRequiredMarker: true,
          rows: 10,
          readOnly: {
            type: 'text',
            template: field => `${field.model[field.key] || ''}`
          }
        },
      },
      {
        key: 'isEditable',
        type: FormlyComponents.EDIT_TABLE_CONTROLS,
        defaultValue: true,
        templateOptions: {
          flexWidth: '10%',
          showDeleteButtonOnly: true,
        },
        expressionProperties: {
          'templateOptions.disabled': (model, formState, _field) => {
            return (
              !formState.permissions.isTlsAuthorized ||
              model.cfg_type === GlobalConstant.CFG_TYPE.FED
            );
          },
        },
      },
    ],
  },
};
