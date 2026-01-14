import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocalUserSelectObjectSchema as LocalUserSelectObjectSchema } from './objects/LocalUserSelect.schema';
import { LocalUserWhereUniqueInputObjectSchema as LocalUserWhereUniqueInputObjectSchema } from './objects/LocalUserWhereUniqueInput.schema';

export const LocalUserFindUniqueOrThrowSchema: z.ZodType<Prisma.LocalUserFindUniqueOrThrowArgs> = z.object({ select: LocalUserSelectObjectSchema.optional(),  where: LocalUserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LocalUserFindUniqueOrThrowArgs>;

export const LocalUserFindUniqueOrThrowZodSchema = z.object({ select: LocalUserSelectObjectSchema.optional(),  where: LocalUserWhereUniqueInputObjectSchema }).strict();