import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  name: z.boolean().optional(),
  principal_id: z.boolean().optional(),
  diagram_id: z.boolean().optional(),
  version: z.boolean().optional(),
  definition: z.boolean().optional()
}).strict();
export const sysdiagramsSelectObjectSchema: z.ZodType<Prisma.sysdiagramsSelect> = makeSchema() as unknown as z.ZodType<Prisma.sysdiagramsSelect>;
export const sysdiagramsSelectObjectZodSchema = makeSchema();
