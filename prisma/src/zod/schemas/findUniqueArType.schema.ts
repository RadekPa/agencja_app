import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTypeSelectObjectSchema as ArTypeSelectObjectSchema } from './objects/ArTypeSelect.schema';
import { ArTypeWhereUniqueInputObjectSchema as ArTypeWhereUniqueInputObjectSchema } from './objects/ArTypeWhereUniqueInput.schema';

export const ArTypeFindUniqueSchema: z.ZodType<Prisma.ArTypeFindUniqueArgs> = z.object({ select: ArTypeSelectObjectSchema.optional(),  where: ArTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArTypeFindUniqueArgs>;

export const ArTypeFindUniqueZodSchema = z.object({ select: ArTypeSelectObjectSchema.optional(),  where: ArTypeWhereUniqueInputObjectSchema }).strict();