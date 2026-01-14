import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArVatWhereInputObjectSchema as ArVatWhereInputObjectSchema } from './objects/ArVatWhereInput.schema';

export const ArVatDeleteManySchema: z.ZodType<Prisma.ArVatDeleteManyArgs> = z.object({ where: ArVatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArVatDeleteManyArgs>;

export const ArVatDeleteManyZodSchema = z.object({ where: ArVatWhereInputObjectSchema.optional() }).strict();