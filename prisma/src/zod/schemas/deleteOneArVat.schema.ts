import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArVatSelectObjectSchema as ArVatSelectObjectSchema } from './objects/ArVatSelect.schema';
import { ArVatWhereUniqueInputObjectSchema as ArVatWhereUniqueInputObjectSchema } from './objects/ArVatWhereUniqueInput.schema';

export const ArVatDeleteOneSchema: z.ZodType<Prisma.ArVatDeleteArgs> = z.object({ select: ArVatSelectObjectSchema.optional(),  where: ArVatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArVatDeleteArgs>;

export const ArVatDeleteOneZodSchema = z.object({ select: ArVatSelectObjectSchema.optional(),  where: ArVatWhereUniqueInputObjectSchema }).strict();