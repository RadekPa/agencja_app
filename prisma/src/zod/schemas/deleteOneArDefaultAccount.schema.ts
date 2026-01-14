import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArDefaultAccountSelectObjectSchema as ArDefaultAccountSelectObjectSchema } from './objects/ArDefaultAccountSelect.schema';
import { ArDefaultAccountWhereUniqueInputObjectSchema as ArDefaultAccountWhereUniqueInputObjectSchema } from './objects/ArDefaultAccountWhereUniqueInput.schema';

export const ArDefaultAccountDeleteOneSchema: z.ZodType<Prisma.ArDefaultAccountDeleteArgs> = z.object({ select: ArDefaultAccountSelectObjectSchema.optional(),  where: ArDefaultAccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArDefaultAccountDeleteArgs>;

export const ArDefaultAccountDeleteOneZodSchema = z.object({ select: ArDefaultAccountSelectObjectSchema.optional(),  where: ArDefaultAccountWhereUniqueInputObjectSchema }).strict();