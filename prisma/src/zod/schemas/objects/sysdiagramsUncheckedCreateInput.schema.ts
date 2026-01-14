import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  name: z.string().max(128),
  principal_id: z.number().int(),
  diagram_id: z.number().int().optional(),
  version: z.number().int().optional().nullable(),
  definition: z.instanceof(Uint8Array).optional().nullable()
}).strict();
export const sysdiagramsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.sysdiagramsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.sysdiagramsUncheckedCreateInput>;
export const sysdiagramsUncheckedCreateInputObjectZodSchema = makeSchema();
