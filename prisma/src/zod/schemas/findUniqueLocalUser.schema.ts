import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocalUserSelectObjectSchema as LocalUserSelectObjectSchema } from './objects/LocalUserSelect.schema';
import { LocalUserWhereUniqueInputObjectSchema as LocalUserWhereUniqueInputObjectSchema } from './objects/LocalUserWhereUniqueInput.schema';

export const LocalUserFindUniqueSchema: z.ZodType<Prisma.LocalUserFindUniqueArgs> = z.object({ select: LocalUserSelectObjectSchema.optional(),  where: LocalUserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LocalUserFindUniqueArgs>;

export const LocalUserFindUniqueZodSchema = z.object({ select: LocalUserSelectObjectSchema.optional(),  where: LocalUserWhereUniqueInputObjectSchema }).strict();