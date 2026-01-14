import * as z from 'zod';
export const sysdiagramsCreateResultSchema = z.object({
  name: z.string(),
  principal_id: z.number().int(),
  diagram_id: z.number().int(),
  version: z.number().int().optional(),
  definition: z.instanceof(Uint8Array).optional()
});