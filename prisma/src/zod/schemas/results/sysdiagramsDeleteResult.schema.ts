import * as z from 'zod';
export const sysdiagramsDeleteResultSchema = z.nullable(z.object({
  name: z.string(),
  principal_id: z.number().int(),
  diagram_id: z.number().int(),
  version: z.number().int().optional(),
  definition: z.instanceof(Uint8Array).optional()
}));