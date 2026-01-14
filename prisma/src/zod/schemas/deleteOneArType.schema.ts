import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTypeSelectObjectSchema as ArTypeSelectObjectSchema } from './objects/ArTypeSelect.schema';
import { ArTypeWhereUniqueInputObjectSchema as ArTypeWhereUniqueInputObjectSchema } from './objects/ArTypeWhereUniqueInput.schema';

export const ArTypeDeleteOneSchema: z.ZodType<Prisma.ArTypeDeleteArgs> = z.object({ select: ArTypeSelectObjectSchema.optional(),  where: ArTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArTypeDeleteArgs>;

export const ArTypeDeleteOneZodSchema = z.object({ select: ArTypeSelectObjectSchema.optional(),  where: ArTypeWhereUniqueInputObjectSchema }).strict();