import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonWhereInputObjectSchema as tblPersonWhereInputObjectSchema } from './objects/tblPersonWhereInput.schema';

export const tblPersonDeleteManySchema: z.ZodType<Prisma.tblPersonDeleteManyArgs> = z.object({ where: tblPersonWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblPersonDeleteManyArgs>;

export const tblPersonDeleteManyZodSchema = z.object({ where: tblPersonWhereInputObjectSchema.optional() }).strict();