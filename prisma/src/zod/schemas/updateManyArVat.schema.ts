import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArVatUpdateManyMutationInputObjectSchema as ArVatUpdateManyMutationInputObjectSchema } from './objects/ArVatUpdateManyMutationInput.schema';
import { ArVatWhereInputObjectSchema as ArVatWhereInputObjectSchema } from './objects/ArVatWhereInput.schema';

export const ArVatUpdateManySchema: z.ZodType<Prisma.ArVatUpdateManyArgs> = z.object({ data: ArVatUpdateManyMutationInputObjectSchema, where: ArVatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArVatUpdateManyArgs>;

export const ArVatUpdateManyZodSchema = z.object({ data: ArVatUpdateManyMutationInputObjectSchema, where: ArVatWhereInputObjectSchema.optional() }).strict();