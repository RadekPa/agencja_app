import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocalUserSelectObjectSchema as LocalUserSelectObjectSchema } from './objects/LocalUserSelect.schema';
import { LocalUserCreateInputObjectSchema as LocalUserCreateInputObjectSchema } from './objects/LocalUserCreateInput.schema';
import { LocalUserUncheckedCreateInputObjectSchema as LocalUserUncheckedCreateInputObjectSchema } from './objects/LocalUserUncheckedCreateInput.schema';

export const LocalUserCreateOneSchema: z.ZodType<Prisma.LocalUserCreateArgs> = z.object({ select: LocalUserSelectObjectSchema.optional(),  data: z.union([LocalUserCreateInputObjectSchema, LocalUserUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.LocalUserCreateArgs>;

export const LocalUserCreateOneZodSchema = z.object({ select: LocalUserSelectObjectSchema.optional(),  data: z.union([LocalUserCreateInputObjectSchema, LocalUserUncheckedCreateInputObjectSchema]) }).strict();