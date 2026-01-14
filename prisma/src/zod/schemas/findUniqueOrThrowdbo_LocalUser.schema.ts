import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dbo_LocalUserSelectObjectSchema as dbo_LocalUserSelectObjectSchema } from './objects/dbo_LocalUserSelect.schema';
import { dbo_LocalUserWhereUniqueInputObjectSchema as dbo_LocalUserWhereUniqueInputObjectSchema } from './objects/dbo_LocalUserWhereUniqueInput.schema';

export const dbo_LocalUserFindUniqueOrThrowSchema: z.ZodType<Prisma.dbo_LocalUserFindUniqueOrThrowArgs> = z.object({ select: dbo_LocalUserSelectObjectSchema.optional(),  where: dbo_LocalUserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dbo_LocalUserFindUniqueOrThrowArgs>;

export const dbo_LocalUserFindUniqueOrThrowZodSchema = z.object({ select: dbo_LocalUserSelectObjectSchema.optional(),  where: dbo_LocalUserWhereUniqueInputObjectSchema }).strict();