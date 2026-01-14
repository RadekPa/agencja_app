import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblFraVAT_NewWhereInputObjectSchema as tblFraVAT_NewWhereInputObjectSchema } from './objects/tblFraVAT_NewWhereInput.schema';

export const tblFraVAT_NewDeleteManySchema: z.ZodType<Prisma.tblFraVAT_NewDeleteManyArgs> = z.object({ where: tblFraVAT_NewWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblFraVAT_NewDeleteManyArgs>;

export const tblFraVAT_NewDeleteManyZodSchema = z.object({ where: tblFraVAT_NewWhereInputObjectSchema.optional() }).strict();