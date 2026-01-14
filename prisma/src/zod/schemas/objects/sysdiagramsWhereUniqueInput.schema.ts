import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { sysdiagramsPrincipal_idNameCompoundUniqueInputObjectSchema as sysdiagramsPrincipal_idNameCompoundUniqueInputObjectSchema } from './sysdiagramsPrincipal_idNameCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  diagram_id: z.number().int().optional(),
  principal_id_name: z.lazy(() => sysdiagramsPrincipal_idNameCompoundUniqueInputObjectSchema).optional()
}).strict();
export const sysdiagramsWhereUniqueInputObjectSchema: z.ZodType<Prisma.sysdiagramsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.sysdiagramsWhereUniqueInput>;
export const sysdiagramsWhereUniqueInputObjectZodSchema = makeSchema();
