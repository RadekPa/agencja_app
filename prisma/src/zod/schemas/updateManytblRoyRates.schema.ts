import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyRatesUpdateManyMutationInputObjectSchema as tblRoyRatesUpdateManyMutationInputObjectSchema } from './objects/tblRoyRatesUpdateManyMutationInput.schema';
import { tblRoyRatesWhereInputObjectSchema as tblRoyRatesWhereInputObjectSchema } from './objects/tblRoyRatesWhereInput.schema';

export const tblRoyRatesUpdateManySchema: z.ZodType<Prisma.tblRoyRatesUpdateManyArgs> = z.object({ data: tblRoyRatesUpdateManyMutationInputObjectSchema, where: tblRoyRatesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblRoyRatesUpdateManyArgs>;

export const tblRoyRatesUpdateManyZodSchema = z.object({ data: tblRoyRatesUpdateManyMutationInputObjectSchema, where: tblRoyRatesWhereInputObjectSchema.optional() }).strict();