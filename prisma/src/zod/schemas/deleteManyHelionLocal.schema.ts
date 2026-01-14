import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HelionLocalWhereInputObjectSchema as HelionLocalWhereInputObjectSchema } from './objects/HelionLocalWhereInput.schema';

export const HelionLocalDeleteManySchema: z.ZodType<Prisma.HelionLocalDeleteManyArgs> = z.object({ where: HelionLocalWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HelionLocalDeleteManyArgs>;

export const HelionLocalDeleteManyZodSchema = z.object({ where: HelionLocalWhereInputObjectSchema.optional() }).strict();