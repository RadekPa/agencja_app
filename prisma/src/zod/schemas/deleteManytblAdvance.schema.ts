import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAdvanceWhereInputObjectSchema as tblAdvanceWhereInputObjectSchema } from './objects/tblAdvanceWhereInput.schema';

export const tblAdvanceDeleteManySchema: z.ZodType<Prisma.tblAdvanceDeleteManyArgs> = z.object({ where: tblAdvanceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblAdvanceDeleteManyArgs>;

export const tblAdvanceDeleteManyZodSchema = z.object({ where: tblAdvanceWhereInputObjectSchema.optional() }).strict();