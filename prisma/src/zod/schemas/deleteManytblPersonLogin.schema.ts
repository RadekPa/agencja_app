import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonLoginWhereInputObjectSchema as tblPersonLoginWhereInputObjectSchema } from './objects/tblPersonLoginWhereInput.schema';

export const tblPersonLoginDeleteManySchema: z.ZodType<Prisma.tblPersonLoginDeleteManyArgs> = z.object({ where: tblPersonLoginWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblPersonLoginDeleteManyArgs>;

export const tblPersonLoginDeleteManyZodSchema = z.object({ where: tblPersonLoginWhereInputObjectSchema.optional() }).strict();