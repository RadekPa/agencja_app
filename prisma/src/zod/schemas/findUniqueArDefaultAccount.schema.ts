import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArDefaultAccountSelectObjectSchema as ArDefaultAccountSelectObjectSchema } from './objects/ArDefaultAccountSelect.schema';
import { ArDefaultAccountWhereUniqueInputObjectSchema as ArDefaultAccountWhereUniqueInputObjectSchema } from './objects/ArDefaultAccountWhereUniqueInput.schema';

export const ArDefaultAccountFindUniqueSchema: z.ZodType<Prisma.ArDefaultAccountFindUniqueArgs> = z.object({ select: ArDefaultAccountSelectObjectSchema.optional(),  where: ArDefaultAccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArDefaultAccountFindUniqueArgs>;

export const ArDefaultAccountFindUniqueZodSchema = z.object({ select: ArDefaultAccountSelectObjectSchema.optional(),  where: ArDefaultAccountWhereUniqueInputObjectSchema }).strict();