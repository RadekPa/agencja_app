import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  principal_id: z.number().int(),
  name: z.string()
}).strict();
export const sysdiagramsPrincipal_idNameCompoundUniqueInputObjectSchema: z.ZodType<Prisma.sysdiagramsPrincipal_idNameCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.sysdiagramsPrincipal_idNameCompoundUniqueInput>;
export const sysdiagramsPrincipal_idNameCompoundUniqueInputObjectZodSchema = makeSchema();
