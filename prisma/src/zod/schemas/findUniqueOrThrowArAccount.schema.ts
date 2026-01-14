import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArAccountSelectObjectSchema as ArAccountSelectObjectSchema } from './objects/ArAccountSelect.schema';
import { ArAccountWhereUniqueInputObjectSchema as ArAccountWhereUniqueInputObjectSchema } from './objects/ArAccountWhereUniqueInput.schema';

export const ArAccountFindUniqueOrThrowSchema: z.ZodType<Prisma.ArAccountFindUniqueOrThrowArgs> = z.object({ select: ArAccountSelectObjectSchema.optional(),  where: ArAccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArAccountFindUniqueOrThrowArgs>;

export const ArAccountFindUniqueOrThrowZodSchema = z.object({ select: ArAccountSelectObjectSchema.optional(),  where: ArAccountWhereUniqueInputObjectSchema }).strict();