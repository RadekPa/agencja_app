import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PlaceID: z.number().int()
}).strict();
export const tblUserAccessUncheckedCreateWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserAccessUncheckedCreateWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUncheckedCreateWithoutTblUsersInput>;
export const tblUserAccessUncheckedCreateWithoutTblUsersInputObjectZodSchema = makeSchema();
