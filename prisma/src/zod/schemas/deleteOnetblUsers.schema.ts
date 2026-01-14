import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUsersSelectObjectSchema as tblUsersSelectObjectSchema } from './objects/tblUsersSelect.schema';
import { tblUsersIncludeObjectSchema as tblUsersIncludeObjectSchema } from './objects/tblUsersInclude.schema';
import { tblUsersWhereUniqueInputObjectSchema as tblUsersWhereUniqueInputObjectSchema } from './objects/tblUsersWhereUniqueInput.schema';

export const tblUsersDeleteOneSchema: z.ZodType<Prisma.tblUsersDeleteArgs> = z.object({ select: tblUsersSelectObjectSchema.optional(), include: tblUsersIncludeObjectSchema.optional(), where: tblUsersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblUsersDeleteArgs>;

export const tblUsersDeleteOneZodSchema = z.object({ select: tblUsersSelectObjectSchema.optional(), include: tblUsersIncludeObjectSchema.optional(), where: tblUsersWhereUniqueInputObjectSchema }).strict();