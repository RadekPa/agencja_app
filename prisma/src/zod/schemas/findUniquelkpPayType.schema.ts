import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { lkpPayTypeSelectObjectSchema as lkpPayTypeSelectObjectSchema } from './objects/lkpPayTypeSelect.schema';
import { lkpPayTypeWhereUniqueInputObjectSchema as lkpPayTypeWhereUniqueInputObjectSchema } from './objects/lkpPayTypeWhereUniqueInput.schema';

export const lkpPayTypeFindUniqueSchema: z.ZodType<Prisma.lkpPayTypeFindUniqueArgs> = z.object({ select: lkpPayTypeSelectObjectSchema.optional(),  where: lkpPayTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.lkpPayTypeFindUniqueArgs>;

export const lkpPayTypeFindUniqueZodSchema = z.object({ select: lkpPayTypeSelectObjectSchema.optional(),  where: lkpPayTypeWhereUniqueInputObjectSchema }).strict();