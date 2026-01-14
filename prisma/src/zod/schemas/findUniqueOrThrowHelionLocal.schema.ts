import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HelionLocalSelectObjectSchema as HelionLocalSelectObjectSchema } from './objects/HelionLocalSelect.schema';
import { HelionLocalWhereUniqueInputObjectSchema as HelionLocalWhereUniqueInputObjectSchema } from './objects/HelionLocalWhereUniqueInput.schema';

export const HelionLocalFindUniqueOrThrowSchema: z.ZodType<Prisma.HelionLocalFindUniqueOrThrowArgs> = z.object({ select: HelionLocalSelectObjectSchema.optional(),  where: HelionLocalWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HelionLocalFindUniqueOrThrowArgs>;

export const HelionLocalFindUniqueOrThrowZodSchema = z.object({ select: HelionLocalSelectObjectSchema.optional(),  where: HelionLocalWhereUniqueInputObjectSchema }).strict();