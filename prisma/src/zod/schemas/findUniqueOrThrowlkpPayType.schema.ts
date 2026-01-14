import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { lkpPayTypeSelectObjectSchema as lkpPayTypeSelectObjectSchema } from './objects/lkpPayTypeSelect.schema';
import { lkpPayTypeWhereUniqueInputObjectSchema as lkpPayTypeWhereUniqueInputObjectSchema } from './objects/lkpPayTypeWhereUniqueInput.schema';

export const lkpPayTypeFindUniqueOrThrowSchema: z.ZodType<Prisma.lkpPayTypeFindUniqueOrThrowArgs> = z.object({ select: lkpPayTypeSelectObjectSchema.optional(),  where: lkpPayTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.lkpPayTypeFindUniqueOrThrowArgs>;

export const lkpPayTypeFindUniqueOrThrowZodSchema = z.object({ select: lkpPayTypeSelectObjectSchema.optional(),  where: lkpPayTypeWhereUniqueInputObjectSchema }).strict();