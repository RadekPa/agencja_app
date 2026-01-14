import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArAccountSelectObjectSchema as ArAccountSelectObjectSchema } from './objects/ArAccountSelect.schema';
import { ArAccountWhereUniqueInputObjectSchema as ArAccountWhereUniqueInputObjectSchema } from './objects/ArAccountWhereUniqueInput.schema';

export const ArAccountDeleteOneSchema: z.ZodType<Prisma.ArAccountDeleteArgs> = z.object({ select: ArAccountSelectObjectSchema.optional(),  where: ArAccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArAccountDeleteArgs>;

export const ArAccountDeleteOneZodSchema = z.object({ select: ArAccountSelectObjectSchema.optional(),  where: ArAccountWhereUniqueInputObjectSchema }).strict();