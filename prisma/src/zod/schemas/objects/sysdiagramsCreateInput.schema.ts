import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  name: z.string().max(128),
  principal_id: z.number().int(),
  version: z.number().int().optional().nullable(),
  definition: z.instanceof(Uint8Array).optional().nullable()
}).strict();
export const sysdiagramsCreateInputObjectSchema: z.ZodType<Prisma.sysdiagramsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.sysdiagramsCreateInput>;
export const sysdiagramsCreateInputObjectZodSchema = makeSchema();
