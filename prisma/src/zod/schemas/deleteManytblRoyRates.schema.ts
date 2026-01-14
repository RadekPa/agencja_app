import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyRatesWhereInputObjectSchema as tblRoyRatesWhereInputObjectSchema } from './objects/tblRoyRatesWhereInput.schema';

export const tblRoyRatesDeleteManySchema: z.ZodType<Prisma.tblRoyRatesDeleteManyArgs> = z.object({ where: tblRoyRatesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblRoyRatesDeleteManyArgs>;

export const tblRoyRatesDeleteManyZodSchema = z.object({ where: tblRoyRatesWhereInputObjectSchema.optional() }).strict();