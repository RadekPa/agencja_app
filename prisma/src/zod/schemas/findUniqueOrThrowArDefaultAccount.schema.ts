import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArDefaultAccountSelectObjectSchema as ArDefaultAccountSelectObjectSchema } from './objects/ArDefaultAccountSelect.schema';
import { ArDefaultAccountWhereUniqueInputObjectSchema as ArDefaultAccountWhereUniqueInputObjectSchema } from './objects/ArDefaultAccountWhereUniqueInput.schema';

export const ArDefaultAccountFindUniqueOrThrowSchema: z.ZodType<Prisma.ArDefaultAccountFindUniqueOrThrowArgs> = z.object({ select: ArDefaultAccountSelectObjectSchema.optional(),  where: ArDefaultAccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArDefaultAccountFindUniqueOrThrowArgs>;

export const ArDefaultAccountFindUniqueOrThrowZodSchema = z.object({ select: ArDefaultAccountSelectObjectSchema.optional(),  where: ArDefaultAccountWhereUniqueInputObjectSchema }).strict();