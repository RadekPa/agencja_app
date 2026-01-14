import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArAccountSelectObjectSchema as ArAccountSelectObjectSchema } from './objects/ArAccountSelect.schema';
import { ArAccountWhereUniqueInputObjectSchema as ArAccountWhereUniqueInputObjectSchema } from './objects/ArAccountWhereUniqueInput.schema';

export const ArAccountFindUniqueSchema: z.ZodType<Prisma.ArAccountFindUniqueArgs> = z.object({ select: ArAccountSelectObjectSchema.optional(),  where: ArAccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArAccountFindUniqueArgs>;

export const ArAccountFindUniqueZodSchema = z.object({ select: ArAccountSelectObjectSchema.optional(),  where: ArAccountWhereUniqueInputObjectSchema }).strict();