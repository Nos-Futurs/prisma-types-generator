import type { TemplateHelpers } from './template-helpers';
import type { ConnectDtoParams } from './types';

interface GenerateConnectDtoParam extends ConnectDtoParams {
  templateHelpers: TemplateHelpers;
}
export const generateDisconnectDto = ({
  model,
  fields,
  imports,
  templateHelpers: t,
}: GenerateConnectDtoParam) => `
  ${t.importStatements(imports)}
  export ${t.config.outputType} ${t.disconnectDtoName(model.name)} {
    ${t.fieldsToDtoProps(fields, true, false)}
  }
`;
