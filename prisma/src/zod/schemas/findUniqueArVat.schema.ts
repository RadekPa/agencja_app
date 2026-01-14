import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArVatSelectObjectSchema as ArVatSelectObjectSchema } from './objects/ArVatSelect.schema';
import { ArVatWhereUniqueInputObjectSchema as ArVatWhereUniqueInputObjectSchema } from './objects/ArVatWhereUniqueInput.schema';

export const ArVatFindUniqueSchema: z.ZodType<Prisma.ArVatFindUniqueArgs> = z.object({ select: ArVatSelectObjectSchema.optional(),  where: ArVatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArVatFindUniqueArgs>;

export const ArVatFindUniqueZodSchema = z.object({ select: ArVatSelectObjectSchema.optional(),  where: ArVatWhereUniqueInputObjectSchema }).strict();